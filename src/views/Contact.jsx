// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div class="flex-grow flex items-center justify-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4 px-5">Kontak Saya</h1>
      <div class="bg-white rounded-lg shadow-md p-6">
        <form class="space-y-4 form-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-gray-800 font-medium">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label for="email" class="block text-gray-800 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
          </div>
          <div>
            <label for="message" class="block text-gray-800 font-medium">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full border border-gray-300 rounded-md px-4 py-2"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              class="bg-ff351e text-white font-medium rounded-md px-4 py-2"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
