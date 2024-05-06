
// Instructions
// 1. Make the below given data Type Safe



// const foodDeliveryService = {
//   serviceName: "TastyBites Delivery",
//   location: "Foodville",
//   restaurants: {
//     italianCorner: {
//       menu: {
//         pizza: { available: 20, price: 12 },
//         pasta: { available: 30, price: 10 },
//         salad: { available: 15, price: 8 },
//       },
//       orders: [
//         { id: 1, items: ["pizza", "pasta"], total: 22 },
//         { id: 2, items: ["salad", "pasta"], total: 18 },
//         { id: 3, items: ["pizza", "pasta"], total: 12 },
//       ],
//       open: false,
//     },
//     burgerJoint: {
//       menu: {
//         burger: { available: 25, price: 8 },
//         fries: { available: 40, price: 4 },
//         drink: { available: 30, price: 2 },
//       },
//       orders: [
//         { id: 1, items: ["burger", "fries"], total: 12 },
//         { id: 2, items: ["drink", "burger", "fries"], total: 14 },
//         { id: 3, items: ["drink"], total: 2 },
//       ],
//       open: true,
//     },
//   },
//   restaurantNames: ["italianCorner", "burgerJoint"],
//   totalRestaurants: 2
// };

// we  will convert all the object and array using interface 

interface MenuItem{
    available:number;
    price : number;

}

interface Order{
    id: number;
    items: String[];
    total:number;
}

interface Restraunt{
    menu:{[key:string]:MenuItem};
    order:Order[];
    open:boolean;
}

interface FoodDeliveryService{
    service:string;
    location:string;
    restaurants:{[key:string]:Restraunt};
}




///////////////////////////////////////////////Question : 2////////////


// Your first challenge arises at the Foundation of Design, where you must craft the foundational class, Building, representing a structure within the city. This class should encompass essential attributes such as name, location, architect, constructionDate, and style, 
// along with methods for retrieving and updating information.


class Building {
    constructor(
        public name:string,
        public location : string,
        public architect : string, 
        public constructionDate : string,
        public style:string){}

        getInfo():string {
            return `name:${this.name},location:${this.location},
            Architect:${this.architect},construction date:${this.constructionDate},style:${this.style}`
        }

        updateInfo(architect:string,constructionDate:string):void{
            this.architect=architect;
            this.constructionDate=constructionDate;
        }
    
}

// now art decoration for building 
class ArtDecorationBuilding extends Building {
    
    constructor (
        name:string,
        location : string,
        architect : string, 
        constructionDate : string,
        public features : string,
        public historicalContext: string,
        public notableExample : string[]
    ){
        super(name,location,architect,constructionDate,features);
    }

    getDetails():string{
        return `${this.getInfo()},Features:${this.features}
        ,Historical Context:${this.historicalContext},Notable Example:${
            this.notableExample.join(",")
        }`
    }
}




// for class modernization 

class ModernistBuilding extends Building{
    constructor(
        name:string,
        location:string,
        architect: string,
        constructionDate: string,
        public features:string,
        public historicalContext: string,
        public materials : string[],
        public notableExample: string[]
    ){
        super(name,location,architect,constructionDate,features);
    }


    getDetails():string{
        return `${this.getInfo()},Features:${this.features}
        ,Historical Context:${this.historicalContext},Notable Example:${
            this.notableExample.join(",")
        }`
    }
}

























// *************************************************************************

// 2. Implement class based inheritance using typescript
// Task: Create an Architectural Masterpieces Inventory

// In the bustling city of Metropolis, renowned for its eclectic skyline and rich architectural heritage, a monumental task awaits: The creation of an Architectural Masterpieces Inventory.

// Picture a cityscape where each building stands as a testament to human ingenuity and creativity, reflecting the spirit of its era and the vision of its architects. As an aspiring urban historian and skilled coder, you are entrusted with the mission to compile a comprehensive digital catalog of Metropolis's architectural gems.

// Your journey commences amidst the bustling streets of downtown Metropolis, where skyscrapers reach for the heavens and historic landmarks whisper tales of bygone eras. Armed with your laptop and a keen eye for detail, you set out to document the city's architectural tapestry.

// Your first challenge arises at the Foundation of Design, where you must craft the foundational class, Building, representing a structure within the city. This class should encompass essential attributes such as name, location, architect, constructionDate, and style, along with methods for retrieving and updating information.

// Having laid the groundwork for your inventory, you venture deeper into the urban landscape, where the Districts of Diversity beckon. Here, you must design subclasses for each architectural style prevalent in Metropolis, ranging from Art Deco to Modernist, each one inheriting from the Building class. These subclasses should provide detailed descriptions of architectural features, historical context, and notable examples within the city.

// But your quest is far from over. As you traverse the city's neighbourhoods and districts, you encounter challenges ranging from deciphering architectural blueprints to documenting the preservation efforts of historic buildings. Yet, with each obstacle overcome, you draw closer to completing the definitive record of Metropolis's architectural legacy.

// Only by mastering the art of object-oriented programming and urban exploration can you unlock the secrets of the city's architectural masterpieces and preserve them for future generations.

// Are you ready to embark on this epic quest through the streets of Metropolis, to unravel the stories etched in steel and stone, and to leave your mark on the city's architectural history?

// // Submission