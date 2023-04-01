class HomeContronller {
  index(req, res) {
    res.json({
      tudoOk: true,
    });
  }
}

export default new HomeContronller();
