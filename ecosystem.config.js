module.exports = {
  apps: [
    {
      name: "shippr",
      cwd: " .",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
    // optionally a second project
  ],
};
