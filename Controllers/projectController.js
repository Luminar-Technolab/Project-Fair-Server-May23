//add project
exports.addProject =  (req,res)=>{
    console.log("Inside add project function");
    const {title,languages,github,website,overview,userId} = req.body
    const projectImage = req.file.filename
    console.log(`${title}, ${languages}, ${github}, ${website}, ${overview},${projectImage}, ${userId}`);
    res.status(200).json("Add project request recieved...")
}