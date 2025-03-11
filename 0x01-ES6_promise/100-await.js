#!/usr/bin/node

import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploader() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    return { photo: photoResponse, user: userResponse };    
  } catch (error) {
        return { photo: null, user: null };
    } 
}