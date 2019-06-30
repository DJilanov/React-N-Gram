const ngramsController = (repository) => {
  const getNgrams = async (req, res) => {
    let str = req.query.text;
    if (str) {
      let map = {};
      let mod = str.length % 2;
      for (let i = 0; i < str.length - mod; i++) {
        let ngram = str.substr(i, 2);
        if (map[ngram] === undefined) {
          map[ngram] = 1;
        } else {
          map[ngram]++;
        }
      }
      res.status(200).send(map);
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
