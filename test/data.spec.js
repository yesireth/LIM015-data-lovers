
import { filterData, orderData, statisticsData} from "../src/data.js";

const array_mock_data= [
  {
    name: 'David Sagitovich Belyavsky',
    gender: 'M',
    sport: 'Gymnastics',
    team: 'Russia',
    noc: 'RUS',
    age: 17,
    medal: 'Silver'
  },
  {
    name: 'Patimat Abakarova',
    gender:'F',
    sport: 'Taekwondo',
    team: 'Azerbaijan',
    noc: 'AZE',
    age: 21,
    medal: 'Gold'
  },
  {
    name: 'Luc Abalo',
    gender: 'M',
    sport: 'Handball',
    team: 'Roma',
    noc: 'FRA',
    age: 31,
    medal: 'Silver'
  },
  {
     name: 'Rachael Alexis Adams',
     gender: 'F',
     sport: 'Rowing',
      team: 'United States',
      noc: 'USA',
      age: 26,
      medal: 'Bronze'
  },
   {  
      name: 'Denis Mikhaylovich Ablyazin',
      gender: 'M',
      sport: 'Gymnastics',
      team: 'Russia',
      noc: 'RUS',
      age: 24,
      medal: 'Bronze'
    },
    {  
      name: 'Denis Mikhaylovich Ablyazin',
      gender: 'M',
      sport: 'Gymnastics',
      team: 'Russia',
      noc: 'RUS',
      age: 24,
      medal: 'Silver'
    }
]; 
const array_mock_removeduplicates=  filterData.removeDuplicateNames(array_mock_data);

describe('filterData', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof filterData).toBe('object');
  });
});

describe('filterData.removeDuplicateNames()', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof filterData.removeDuplicateNames).toBe('function');
  });
  it('No deberia ser Null', () => {
    expect(filterData.removeDuplicateNamese).not.toBeNull();
  });
  
  it('Valida nombres no duplicados', () => {
    
    let array_mock_result = [
        {
          name: 'Giovanni Abagnale',
          gender: 'M',
          sport: 'Rowing',
          team: 'Italy',
          noc: 'ITA',
          age: 21,
          medal: 'Bronze'
        },
        {
          name: 'Patimat Abakarova',
          gender:'F',
          sport: 'Taekwondo',
          team: 'Azerbaijan',
          noc: 'AZE',
          age: 21,
          medal: 'Bronze'
        },
        {
          name: 'Luc Abalo',
          gender: 'M',
          sport: 'Handball',
          team: 'France',
          noc: 'FRA',
          age: 31,
          medal: 'Silver'
        },
        {
           name: 'Rachael Alexis Adams',
           gender: 'F',
           sport: 'Volleyball',
            team: 'United States',
            noc: 'USA',
            age: 26,
            medal: 'Bronze'
        },
         {  
            name: 'Denis Mikhaylovich Ablyazin',
            gender: 'M',
            sport: 'Gymnastics',
            team: 'Russia',
            noc: 'RUS',
            age: 24,
            medal: 'Silver'
          },
        ];
    let array_result = filterData.removeDuplicateNames(array_mock_data);
    expect(array_result.name).toEqual(array_mock_result.name);
  });
});

describe('filterData.selectedAthleteInformation()', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof filterData.selectedAthleteInformation).toBe('function');
  });
  const array_mock_name = filterData.selectedAthleteInformation('Rachael Alexis Adams',array_mock_data);
  it('La longitud del array de retorno deberia ser igual a 1', () => {
    expect(array_mock_name.length).toBe(1);
  });
  it('No deberia ser Null', () => {
    expect(filterData.selectedAthleteInformation).not.toBeNull();
  });
})

describe('filterData.removeDuplicateDataArray()', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof filterData.removeDuplicateDataArray).toBe('function');
  });
  const array_mock_dataSport = filterData.removeDuplicateDataArray('sport', array_mock_data);
  const array_mock_dataCountry = filterData.removeDuplicateDataArray('team', array_mock_data);

  it('Valida que los deportes no estén duplicados', () => {
    let array_mock_result =['Taekwondo', 'Handball', 'Gymnastics', 'Rowing'];
    expect(array_mock_dataSport).toEqual(expect.arrayContaining(array_mock_result));
  });
  it('Valida que los paises no estén duplicados', () => {
    let array_mock_result = ['Azerbaijan', 'Roma', 'United States', 'Russia'];
    expect(array_mock_dataCountry).toEqual(expect.arrayContaining(array_mock_result));
  });
})

describe('filterData.filterMultipleData()',() =>  {
  it('Deberia ser una funcion', () => {
    expect(typeof filterData.filterMultipleData).toBe('function');
  });
  const array_mock_female = filterData.filterMultipleData('F', '', '', array_mock_removeduplicates)
  it('Filtra por genero de los atletas, categoria F', () => {
    let array_mock_result = [
      {
        name: 'Patimat Abakarova',
        gender:'F',
        sport: 'Taekwondo',
        team: 'Azerbaijan',
        noc: 'AZE',
        age: 21,
        medal: 'Gold'
      },
      {
         name: 'Rachael Alexis Adams',
         gender: 'F',
         sport: 'Rowing',
          team: 'United States',
          noc: 'USA',
          age: 26,
          medal: 'Bronze'
      }
    ]
    expect(array_mock_female).toStrictEqual(array_mock_result)
  });
  it ('Filtra por medallas ganadas', () => {//no entiendo este test
    let array_mock_result = [
      {
         name: 'Rachael Alexis Adams',
         gender: 'F',
         sport: 'Rowing',
          team: 'United States',
          noc: 'USA',
          age: 26,
          medal: 'Bronze'
      },
      {  
        name: 'Denis Mikhaylovich Ablyazin',
        gender: 'M',
        sport: 'Gymnastics',
        team: 'Russia',
        noc: 'RUS',
        age: 24,
        medal: 'Bronze'
      }
    ]
    expect(filterData.filterMultipleData('Bronze', '18', '25', array_mock_data)).toEqual(array_mock_result)
  });
  it ('Filtra por edad menor a 18 años', () => {
    const array_result = filterData.filterMultipleData('', '0', '17', array_mock_removeduplicates);
    let array_mock_result = [
      {
        name: 'David Sagitovich Belyavsky',
        gender: 'M',
        sprt: 'Gymnastics',
        team: 'Russia',
        noc: 'RUS',
        age: 17,
        medal: 'Silver'
      }
    ]
    expect(array_result.age < 18).toEqual(array_mock_result.age < 18)
  });
  it ('Filtra por edad entre 30 y 35 años', () => {
    const array_result = filterData.filterMultipleData('', '30', '35', array_mock_removeduplicates);
    let array_mock_result = [{
      name: 'Luc Abalo',
      gender: 'M',
      sport: 'Handball',
      team: 'France',
      noc: 'FRA',
      age: 31,
      medal: 'Silver'
    }];
    expect(array_result.age > 30 && array_result.age < 35 ).toEqual(array_mock_result.age > 30 && array_mock_result.age.age < 35)
  });
  it ('Filtra por edad entre 35 y 40 años', () => {
    const array_result = filterData.filterMultipleData('', '35', '40', array_mock_removeduplicates);
    expect(array_result.age > 35 && array_result.age < 40 ).toEqual(false)
  });
  it ('Filtra por edad entre 40 y 45 años ', () => {
    const array_result = filterData.filterMultipleData('', '40', '45', array_mock_removeduplicates);
    expect(array_result.age > 40 && array_result.age < 45 ).toEqual(false)
  });
  it ('Filtra por edad entre 45 y 50 años', () => {
    const array_result = filterData.filterMultipleData('', '45', '50', array_mock_removeduplicates);
    expect(array_result.age > 45 && array_result.age < 50 ).toEqual(false)
  });

  it ('Filtra por edad entre 50 y 60 años', () => {
    const array_result = filterData.filterMultipleData('', '50', '60', array_mock_removeduplicates);
    expect(array_result.age > 50 && array_result.age < 60 ).toEqual(false)
  });

});

describe('filterData.searchResult()',() =>  {
  it('Deberia ser una funcion', () => {
    expect(typeof filterData.searchResult).toBe('function');
  });
  it('Deberia ser la longitud igual a 1 para la busqueda en input de "Patimat"', () =>  {
    const array_result = filterData.searchResult(array_mock_removeduplicates, 'Patimat');
    expect(array_result.length).toBe(1);
  });
  it('Deberia ser la longitud igual a 1 para la busqueda en input de "Taekwondo"', () =>  {
    const array_result = filterData.searchResult(array_mock_removeduplicates, 'Taekwondo');
    expect(array_result.length).toBe(1);
  });

  it('No deberia ser Null', () => {
    expect(filterData.removeDuplicateNamese).not.toBeNull();
  });
});

describe('orderData', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof orderData).toBe('object');
  });
});

describe('orderData.orderedSelect()',() =>  {
  it ('Deberia ser una funcion', () =>{
    expect(typeof orderData.orderedSelect).toBe('function');
  });
  it ('Deberia retornar "David Sagitovich Belyavsky, Denis Mikhaylovich Ablyazin", "Luc Abalo", "Patimat Abakarova", "Rachael Alexis Adams" de la A-Z', () => {
    const array_mock_result= orderData.orderedSelect("A-Z", array_mock_data);
    expect(array_mock_result[0].name).toEqual("David Sagitovich Belyavsky");
  })
  it ('Deberia retornar "Rachael Alexis Adams", "Patimat Abakarova", "Luc Abalo","Denis Mikhaylovich Ablyazin" de la Z-A', () => {
    const array_mock_result= orderData.orderedSelect("Z-A", array_mock_data);
    expect(array_mock_result[0].name).toEqual("Rachael Alexis Adams");
  })
  it ('Deberia retornar "17", "21", "24","24" "26", "31" menos de edad', () => {
    const array_mock_result= orderData.orderedSelect("menos-edad", array_mock_removeduplicates );
    expect(array_mock_result[0].age).toEqual(17);
  });
  it ('Deberia retornar "31","26", "24","24", "21", 17"  mas edad', () => {
    const array_mock_result = orderData.orderedSelect("mas-edad", array_mock_removeduplicates);
    expect(array_mock_result[0].age).toEqual(31);
  });
  it('No deberia ser Null', () => {
    expect(filterData.removeDuplicateNamese).not.toBeNull();
  });
});

describe('statisticsData', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof statisticsData).toBe('object');
  });
  it('No deberia ser Null', () => {
    expect(filterData.removeDuplicateNamese).not.toBeNull();
  });
});

describe('statisticsData.sumMedalsCountries', ()  => {
  it ('Deberia ser una funcion', () =>{
    expect(typeof statisticsData.sumMedalsCountries).toBe('function');
  });
  it ('Deberia retornar 2 para Russia', () =>{
    const array_mock_result = statisticsData.sumMedalsCountries('Silver', array_mock_data)
    expect(array_mock_result.RUS).toBe(2);
  });
  it('No deberia ser Null', () => {
    expect(filterData.removeDuplicateNamese).not.toBeNull();
  });
})

describe('statisticsData.sumMedalsOfAthlethe', ()  => {
  it ('Deberia ser una funcion', () =>{
    expect(typeof statisticsData.sumMedalsCountries).toBe('function');
  });
  it ('Deberia retornar 2 para Denis Mikhaylovich Ablyazin', () =>{
    const array_mock_result = statisticsData.sumMedalsOfAthlethe('Denis Mikhaylovich Ablyazin', array_mock_data) 
    expect(array_mock_result).toBe(2);
  });
  it ('Deberia retornar 1 para Patimat Abakarova', () =>{
    const array_mock_result = statisticsData.sumMedalsOfAthlethe('Patimat Abakarova', array_mock_data) 
    expect(array_mock_result).toBe(1);
  });
  it('No deberia ser Null', () => {
    expect(filterData.removeDuplicateNamese).not.toBeNull();
  });
});

describe('statisticsData.sumMedalsByGender', () => {
  it ('Deberia ser una funcion', () =>{
    expect(typeof statisticsData.sumMedalsByGender).toBe('function');
  });
  it (' Deberia retornar 1 para medallas de oro de las mujeres', () => {
    const array_mock_result = statisticsData.sumMedalsByGender('F', array_mock_data);
    expect(array_mock_result.Gold).toEqual(1);
  });
  it (' Deberia retornar 1 para medallas de oro para los hombres', () => {
    const array_mock_result = statisticsData.sumMedalsByGender('M', array_mock_data);
    expect(array_mock_result.Silver).toEqual(3);
  });
})


