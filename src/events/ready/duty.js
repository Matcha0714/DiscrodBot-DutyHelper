// "students": [
//     1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 24, 26, 25, 28,
//     29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48,
//     50, 51, 52, 53, 55, 56, 58, 59, 60, 61, 23
//   ]

const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const dutyJson = require("../../../json/duty.json");
const { testServer, dutyServer } = require("../../../config.json");

const fs = require("fs");
const dayjs = require("dayjs");

dayjs.extend(require("dayjs/plugin/utc"));
dayjs.extend(require("dayjs/plugin/timezone"));
dayjs.extend(require("dayjs/plugin/weekOfYear"));


module.exports = (client) => {
  let testChannel = client.channels.cache.get(testServer);
  sendDutyMessage(testChannel);
  scheduleDutyMessages(testChannel);
};

function scheduleDutyMessages(channel) {
    // send msg on 8 o'clock msg
    const sendDutyMsgAt8AM = async () => {
        const now = dayjs().tz("Asia/Taipei");

        if (now.week() === dutyJson.lastSendWeeks) {
            return;
        }

        if (now.hour() >= 8) {
            // send duty msg
            sendDutyMessage(channel);
            // update weeks
            dutyJson.students = students.concat(students.splice(0, 10));
            dutyJson.lastSendWeeks = now.week();
            writeDutyJson();
        }
    };
    // check msg send
    setInterval(sendDutyMsgAt8AM, 1000); // every minute
}

function sendDutyMessage(channel) {
    const students = dutyJson.students;
    const weekOfName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const embed = new EmbedBuilder()
        .setTitle("The duty students for this week")
        // .setAuthor({name: "Classroom usage status", url: "https://discord.js.org" })
        .setThumbnail("attachment://testt.jpg")
        .setURL("https://aps.ntut.edu.tw/course/tw/Croom.jsp?format=-3&year=112&sem=1&code=429")
        .setColor("Random");

    for (var i = 0; i < 5; i++) {
        embed.addFields({
            name: weekOfName[i],
            value: `${students[i * 2]}, ${students[i * 2 + 1]}`,
        });
    }

    channel.send({ embeds: [embed], files: [new AttachmentBuilder("./src/testt.jpg")] });
}

function moveStudents(number) {
    const students = dutyJson.students;
    dutyJson.students = students.concat(students.splice(0, students.indexOf(number)));
    writeDutyJson();
}

function writeDutyJson() {
    fs.writeFileSync("./json/duty.json", JSON.stringify(dutyJson, null, 2), "utf8");
}
