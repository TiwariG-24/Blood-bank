 const testcontroller = (req,res)=>{
    res.status(200).send({
        message: "hello world",
        success: true,
    });
};

module.exports ={ testcontroller };