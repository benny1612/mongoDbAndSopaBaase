import supabase from "../db/sopabasa.js";
export async function addUserD(username, password) {
  try {
    const { error } = await supabase
      .from("users")
      .insert([{ username: username, password: password }]);
    if (error) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
}
export async function userValdiet(username, password) {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .eq("password", password);
    if (error) {
      throw error;
    }
    return data?.[0];
  } catch (err) {
    console.error(err);
  }
}
