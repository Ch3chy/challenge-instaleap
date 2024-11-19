import { Envs } from "../constants/env.constants";

export const getEnv = (env: Envs) => {
  return process.env[env] || "";
};

export const getServiceUrl = () => {
  return getEnv(Envs.API_HOST);
};
