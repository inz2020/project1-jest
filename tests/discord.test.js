import { ping } from "../src/discord"

//Ici exemple de mise  en évidence des mocks lorsque la dependance est en paramètre (il s'agit de message dans le fichier discord.js)
describe('Discord',
    function() {
        it('should dm the user',
            async function() {
                const channelMock = { send: jest.fn() }
                const createDMMock = jest.fn().mockResolvedValue(channelMock)


                const message = {
                    delete: jest.fn().mockResolvedValue({}),
                    reply: jest.fn(),
                    author: {
                        createDM: createDMMock

                    }
                }
                await ping(message)
                    //Verifier que la fonction a été bien appelé
                expect(message.delete).toHaveBeenCalled()
                expect(channelMock.send).toHaveBeenCalledWith('pong')


                // const mock = jest.fn().mockReturnValueOnce(12).mockReturnValueOnce(6).mockReturnValueOnce(2)
                // console.log(mock())
                // console.log(mock())
                // console.log(mock())
                // console.log(mock())

            })


        //ici on teste le cas où  lorsqu'on fait appel à un channel dm ça echoue.

        it('should reply to the user if dm are desactived',
            async function() {

                const createDMMock = jest.fn().mockRejectedValue({})
                const message = {
                    delete: jest.fn().mockResolvedValue({}),
                    reply: jest.fn(),
                    author: { createDM: createDMMock }
                }

                await ping(message)
                expect(message.delete).toHaveBeenCalled
                expect(message.reply).toHaveBeenCalledWith('pong')
            })
    })