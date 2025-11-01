export async function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@mail.com" && password === "1234") resolve({ id: 1, email });
      else reject(new Error("Invalid credentials"));
    }, 800);
  });
};

export async function createUser(user) {
  return fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then(res => res.json());
};
