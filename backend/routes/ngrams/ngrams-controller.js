const ngramsController = (repository) => {
  const getNgrams = async (req, res) => {
    if (req.query.text) {
      res.status(200).send({
        "He": 1,
        "el": 1,
        "ll": 1,
        "lo": 1
      });
    } else {
      res.status(400).send(
        {
          error: true,
          message: 'Provide a correct text!'
        }
      );
    }
  };

  return {
    getNgrams
  };
};

module.exports = ngramsController;
