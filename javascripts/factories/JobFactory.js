app.factory("JobFactory", function($http, $q, FIREBASE_CONFIG) {
  let getList = (userId) => {
    let jobs = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/jobs.json?orderBy="uid"&equalTo="${userId}"`)
        .then((fbJobs) => {
          let jobCollection = fbJobs.data;
          if (jobCollection !== null) {
            Object.keys(jobCollection).forEach((key) => {
              jobCollection[key].id = key;
              jobs.push(jobCollection[key]);
            });
          }
          resolve(jobs);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return { getList: getList };
});
