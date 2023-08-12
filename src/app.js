import { and, between, eq, gt, inArray, isNotNull, isNull, like, ne, not, notInArray, or } from "drizzle-orm";
import { UserSchema } from "./db/schema/user.schema";
import { connectToDb } from "./db/db";

const runQuery = async () => {
    const db=await connectToDb();
    //INSERT
    // const result = await db.insert(UserSchema).values({
    //   email:"Pritam3@gmail.com",
    //   fullName:"Pritam Saha",
    //   gender:"male",
    //   password:"Cn@#12345",
    //   roleSlug:"user",
    //   address:"Panihati",
    //   age:26,
    //   phone:6789876423,
    //   id:3
    // });
  //QUERIES
 //const result = await db.select().from(UserSchema).where(eq(UserSchema.id,"1")); //for equal
 //const result = await db.select().from(UserSchema).where(ne(UserSchema.id,"1")); //not equal
 //const result = await db.select().from(UserSchema).where(gt(UserSchema.score,2)); //greater than
 //const result = await db.select().from(UserSchema).where(isNull(UserSchema.score,null)); //find null
 //const result = await db.select().from(UserSchema).where(isNotNull(UserSchema.score,null)); //find not null
 //const result = await db.select().from(UserSchema).where(inArray(UserSchema.id,[1,2])); //find selective users with id 1 and 2 
 //const result = await db.select().from(UserSchema).where(notInArray(UserSchema.age,[22,23])); //find non selective users with age 22 and 23
// const result = await db.select().from(UserSchema).where(between(UserSchema.score,41,70)); //to find the score of the users between 41,70
//const result = await db.select().from(UserSchema).where(like(UserSchema.address, "%pur%")); //for the search 
//const result = await db.select().from(UserSchema).where(not(like(UserSchema.address, "%pur%"))); //not can be use as a or statement
//const result = await db.select().from(UserSchema).where(and(like(UserSchema.address, "%mila%",gt(UserSchema.score,60)))); // for run two query combined
//const result = await db.select().from(UserSchema).where(or(like(UserSchema.address, "%mila%",gt(UserSchema.score,60)))) //to give the results in a single condition
//const result = await db.select().from(UserSchema).where(or(like(UserSchema.address, "%mila%",gt(UserSchema.score,60)))) //to give the results in a single condition
//ADVANCED QUERIES FOR RELATIONS
// const result=await db.query.UserSchema.findFirst({
//     with:{
//         profile:true,
//         blogs:{
//             with:{
//                 category:true
//             },
//             columns:{
//                 title:true
//             }
//         }
//     }
// });
// const result=await db.query.BlogSchema.findFirst({
//     with:{
//         author:true,
//         category:{
//             columns:{
//                 categorySlug:true
//             }
//         }
//     }
// })
// const result=await db.query.BlogSchema.findFirst({
//     with:{
//         author:true,
//         category:true
//     }
// })
//UPDATE
// const result=await db.update(UserSchema)
//   .set({ fullName:"Mimo Saha" })
//   .where(eq(UserSchema.id, 1));
//DELETE
const result=await db.delete(UserSchema).where(eq(UserSchema.id, 3));
console.log(JSON.stringify(result, null, 2));
};
runQuery();
