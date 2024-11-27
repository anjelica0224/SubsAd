import { users } from "@clerk/clerk-sdk-node";

//Add metadata to Clerk
export const addUserMetadata = async (userId, metadata) => {
  await users.updateUser(userId, {
    publicMetadata: metadata.public,
    privateMetadata: metadata.private,
  });
};

//Fetch metadata from Clerk
export const getUserMetadata = async (userId) => {
  const user = await users.getUser(userId);
  return { public: user.publicMetadata, private: user.privateMetadata };
};