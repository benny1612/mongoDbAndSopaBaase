import {getDB,connect} from "../db/mongodb.js";
await connect()
export async function createMessageD(newMessage){
  try {
    const result = await getDB()
      .collection("Messages")
      .insertOne(newMessage);
return result.acknowledged


  } catch (err) {
    console.error(err)
  }
};

export async function getAllMessagesD() {
  try {
    return await getDB()
      .collection("Messages")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getMessagesByIdD(id) {
  try {
    const messages= await getDB()
      .collection("Messages")
      .find({userId:parseInt(id)})
      .toArray();
      console.log(id)
      console.log(messages)
      if(messages.length>0){return messages}else{return "user dont have any messages!"}
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function updateMessagesD(userId,newContent) {
  try {
    console.log('start');
    
      const newMessage = await getDB()
            .collection("Messages")
            .findOneAndUpdate(
              {userId:parseInt(userId)},
              { $set:{ content: newContent ,updatedAt:new Date()} }
            );
            return newMessage?'user update sec':"err";
            
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export async function deleteMessagesD(userId) {
  try {
      const newMessage = await getDB()
            .collection("Messages")
            .deleteOne(
              {userId:parseInt(userId)}
            );
  } catch (err) {
    console.error(err);
    throw err;
  }
}
