module.exports = app => {
    const { router, controller } = app

    router.get('/client/index', controller.client.home.index)

    router.get('/client/getArticleList' , controller.client.home.getArticleList)
}