import { $host } from './index';
import { jwtDecode } from 'jwt-decode';

export const postById = async (id: number) => {
  const { data } = await $host.get(`/posts/${id}`, {
   
  });
  return data;
};

export const getByAuthor = async (author: string) => {
  const { data } = await $host.get(`/posts?author=${author}`, {
   
  });
  return data;
};

export const createPost = async (title: string, content: string, username: string) => {
  const { data } = await $host.post(`/posts`, {
    title,
    content,
    username
  });
  return data;
};

export const updatePost = async (id: number, title?: string, content?: string) => {
  const updateData: any = {};

  if (title !== undefined) updateData.title = title;
  if (content !== undefined) updateData.content = content;

  const { data } = await $host.patch(`/posts/${id}`, {    
  }); 
  return data;
};

export const deletePost = async (id: number) => {
  const { data } = await $host.delete(`/posts/${id}`, {
  
  });
  return data;
};

