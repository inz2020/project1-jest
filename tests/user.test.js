import Users from '../src/user'

import axios from 'axios'

//ici on demande à jeste de mocker la libraire axios
//Donc, plutot d'envoyer la version notmale de axios, jest va envoyer un mock
jest.mock('axios')

//description du scenario

describe('Users', function() {
    beforeEach(() => {
        axios.mockClear()
    })

    const fakeRespnse = [{ name: 'John Doe' }]

    it('should return last user with fetch', async() => {
        //axios.get.mockResolvedValue({ data: fakeRespnse })
        //expect(await Users.getLastUserName()).toBe('John Doe')
        fetch.mockResponseOnce(JSON.stringify(fakeRespnse))
        expect(await Users.getLastUserNameFetch()).toBe('John Doe')
    })

})