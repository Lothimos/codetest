

import headerHelper from '../../helpers/headerHelper';


describe.each([
    ['<http://localhost:3008/players?_limit=10&_page=1>; rel="first", <http://localhost:3008/players?_limit=10&_page=2>; rel="next", <http://localhost:3008/players?_limit=10&_page=10>; rel="last"', 'http://localhost:3008/players?_limit=10&_page=2'], 
    ['<http://localhost:3008/players?_limit=10&_page=1>; rel="first", <http://localhost:3008/players?_limit=10&_page=836>; rel="next", <http://localhost:3008/players?_limit=10&_page=10>; rel="last"', 'http://localhost:3008/players?_limit=10&_page=836'], 
])
('HeaderHelper.getNextLink',
    (incoming1, expectedResult)=>{
        test(`when you have a header of '${incoming1}' you should get '${expectedResult}'`, () => {
            //Arrange
            
            //Act
            let result = headerHelper.getNextLink(incoming1);
            
            //Assert
            expect(result).toBe(expectedResult);
        });
        
    }    
);
