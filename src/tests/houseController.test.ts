import {HouseController} from "../controller/houseController";

describe ('HouseController', () => {
    let houseController: HouseController;

    beforeEach(() => {
        const mockDBService = {
            getHouses: jest.fn(),       
            getHouseById: jest.fn(),
        }
        houseController = new HouseController(mockDBService);
    });

    test('should return sum when both numbers are positive', async ()=>{
        //given
        const num1=10;
        const num2=10;

        //when
        const result=houseController.sum(num1, num2);

        //then
        expect(result).toBe(20);
    });
    test('should throw error when a number is negative', async ()=>{
        //given
        const num1=10;
        const num2=-10;

        //when
        const result=houseController.sum(num1, num2);

        //then
        expect(result).rejects.toThrow('Negative numbers are not allowed');
    });
})