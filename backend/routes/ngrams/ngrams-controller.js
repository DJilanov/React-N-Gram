const ngramsController = (repository) => {
  const getNgrams = async (req, res) => {
    // if (params.ok !== 0) {
      res.status(200).send({
        "He": 1,
        "el": 1,
        "ll": 1,
        "lo": 1
      });
    // } else {
    //   res.status(400).send(
    //     {
    //       error: response,
    //       isSuccessful: false,
    //       message: 'Provide a correct portfolio ID!'
    //     }
    //   );
    // }
  };

  return {
    getNgrams
  };
};

module.exports = ngramsController;
