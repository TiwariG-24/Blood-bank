const userModels = require("../models/userModels")
//Get donars
const getDonarsListController = async (req,res) =>{
try{
const donarData = await userModels.find({role:'donar'}).sort({createdAt:-1})
return res.status(200).send({
    success:true,
    Totalcount:donarData.length,
    message: "donar list fetched sucessfully",
    donarData,
})
}catch(error){
    console.log(error)
    return res.status(500).send({
        success:false,
        message:"error in donar list api",
        error,
    })
}
}

//Get donars
const getHospitalListController = async (req, res) => {
    try {
      const hospitalData = await userModels
        .find({ role: "hospital" })
        .sort({ createdAt: -1 });
  
      return res.status(200).send({
        success: true,
        Toatlcount: hospitalData.length,
        message: "HOSPITAL List Fetched Successfully",
        hospitalData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In Hospital List API",
        error,
      });
    }
  };
  //GET ORG LIST
  const getOrgListController = async (req, res) => {
    try {
      const orgData = await userModels
        .find({ role: "organisation" })
        .sort({ createdAt: -1 });
  
      return res.status(200).send({
        success: true,
        Toatlcount: orgData.length,
        message: "ORG List Fetched Successfully",
        orgData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error In ORG List API",
        error,
      });
    }
  };

    //delete donor
    const deleteDonarController = async (req,res) =>{
try{
await userModels.findByIdAndDelete(req.params.id)
return res.status(200).send({
    success: true ,message : "User deleted successfully"})  ;
}

catch(error){
    return res.status(500).send({
        success:false ,message : "Error while deleting "
    ,error,})
    }
    }
    
module.exports={getDonarsListController,getHospitalListController,getOrgListController,deleteDonarController}