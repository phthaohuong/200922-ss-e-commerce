import phones from "./mockPhones";

// Hàm fetchPhones trả về một Promise
export const fetchPhones = async () => {
  return new Promise((resolve) => {
    resolve(phones);
  });
};
