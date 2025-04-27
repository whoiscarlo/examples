async function resolveRemoteBuildCache(props, options) {
  console.log(`Searching builds with matching fingerprint on Github Releases`);
}

async function uploadRemoteBuildCache(props, options) {
  console.log(`Uploading build to Github Releases`);
}

export default {
  resolveRemoteBuildCache,
  uploadRemoteBuildCache,
};
