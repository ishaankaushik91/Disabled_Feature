import Slaves from "./Model.js";
import "./dbConnect.js";

async function SlaveMinds() {
  try {
    for (let i = 0; i <= 10; i++) {
      let slave = { username: makeid(5), password: makeid(10) };

      let newSlave = new Slaves(slave);
      await newSlave.save();
      console.log(slave, "Saved");
    }
  } catch (error) {
    console.log(error);
  }
}

SlaveMinds();

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
