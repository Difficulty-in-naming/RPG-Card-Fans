const Path = require("path");
const FS   = require("fs");
const { basename } = require("path");
const { exec } = require("child_process");

//修改以下变量
const SpinePath = "C:/Dev/Tools/Spine/Spine"
const ExportJsonPath = "C:/Users/Administrator/Desktop/测试Spine/1.export.json"


let Files = [];
var dirName = process.argv[2];
function ThroughDirectory(Directory) {
  FS.readdirSync(Directory).forEach(File => {
      const Absolute = Path.join(Directory, File);
      if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
      else return Files.push(Absolute);
  });
}
ThroughDirectory(dirName);
Files.forEach((t1)=>{
  if(t1.includes(".skel") && t1.endsWith(".meta") == false){
    var f = Path.basename(t1);
    var dir = Path.dirname(t1);
    f = f.substring(0, f.indexOf('.')) || f;
    var newFile = dir + Path.sep + f + ".skel";
    FS.rename(t1,newFile,()=>{});
    exec(`${SpinePath} -i ${newFile} -o ${dir} -e ${ExportJsonPath}`, (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
    });
    FS.rm(newFile,()=>{});
  }
});


/* const getDirectories = readdirSync(dirName, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .forEach((t1)=>console.log(dirName + path.sep + t1)); */