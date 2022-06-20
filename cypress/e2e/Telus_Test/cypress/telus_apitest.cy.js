
context('API Test ', () => {
    it('should get all user details',function(){
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users',
            headers: {
                'authorization' : "Bearer 8de6e6326c04ac7b8763decd22da3080fc3e33f3d3fa06ea057e8097c8d8a39b"
            }

        }).then((res)=>{
            expect(res.status).to.eql(200)
            expect(res.body.meta.pagination.page).to.eql(1)
        })
    })
    it('Should get single user details ', function(){
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users/3344',
            headers: {
                'authorization' : "Bearer 8de6e6326c04ac7b8763decd22da3080fc3e33f3d3fa06ea057e8097c8d8a39b"
            }

        }).then((res)=>{
            expect(res.status).to.eql(200)
            expect(res.body.deta.name).to.eql('Anand Chaturvedi')
        })

    })
})