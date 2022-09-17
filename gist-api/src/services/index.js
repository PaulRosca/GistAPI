import { Octokit } from "octokit";
const octokit = new Octokit({
  auth: "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"
});

export const searchUserGist = async (username) => {
  try {
    const response = await octokit.request('GET /users/{username}/gists', { username });
    return response.data;
  }
  catch (e) {
    throw e;
  }
}

export const getGistForks = async (gistID) => {
  try {
    const response = await octokit.request('GET /gists/{gist_id}/forks', { gist_id: gistID });
    return response.data;
  }
  catch (e) {
    throw e;
  }
}
