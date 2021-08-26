
var obj =0;
var contract =0;
var response = await fetch('../../artifacts/contracts/Factory.sol/Factory.json');
obj =  await response.json();


var contract =0;
var account = 0;
async function main() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner()
  // const accounts = await ethers.provider.listAccounts();
  const account = await provider.listAccounts();
  // 0xf59c9F90d5399d43f969f1c8c2Ad85429541383b
  const contractName = "0x09085ad96919900716b3Ca8d24Eaa889F865Fd3C"
  console.log(account[0]);
  contract = new ethers.Contract(contractName, obj.abi, signer);
  console.log(await contract);
  // contract.create('location','122',10,100,1,2,1234,'12','0xF88f502Ea97C7A502CC4412eA3867F45Ef74fA43');
  
}

await main();
try{
document.getElementById("addProp").addEventListener('click', addProperty);
}
catch (e){console.log("no form object")};
async function addProperty(){

  var location= $('#location').val();
  
    var pin= $('#pin').val();
    // var Fee1= $('#Fee1').val();
 
    var Fee2= Number( $('#fee2').val());
    var strtemp =document.getElementById("Lawname").value.split(" ");
    
    var add1= strtemp[0];
    var Fee1= Number(strtemp[1]);
    var proptype=Number(document.getElementById("proptype").value);
    
    var acco=Number(document.getElementById("acco").value);
    
    var email=(document.getElementById("email").value);
    var contact =(document.getElementById("contact").value);
    var city=(document.getElementById("city").value);
    var tenure=(document.getElementById("tenure").value);

    var blockentry = email +"%"+contact +"%"+city +"%"+tenure ;
   
   
    // var distr= document.getElementById("distr").value;
   

    var proparea=Number($('#area').val());
    
    console.log((location)+','+(pin)+','+(Fee1)+','+(Fee2)+','+(proptype)+','+(acco)+','+(proparea)+','+(blockentry)+','+(add1))   ;
  
    await contract.create(location,pin,Fee1,Fee2,proptype,acco,proparea,blockentry,add1);
    // Villa vid havet 10,1230,10,4222,0,2,222,12,0xF88f502Ea97C7A502CC4412eA3867F45Ef74fA43
    // contract.create('Villa vid havet 10','1230',10,4222,0,2,222,'12','0xF88f502Ea97C7A502CC4412eA3867F45Ef74fA43');
    // contract.create('location','122',10,100,1,2,1234,'12','0xF88f502Ea97C7A502CC4412eA3867F45Ef74fA43');
    // alert(err);
    document.querySelector("form").onsubmit = function (event) {
           return true;
  };
  document.querySelector("form").submit();
};

export const GetPropCount = async () => {
  const result = (await contract.getInstanceCount()).toNumber()
    return result ;  
};

export const getPropPrice = async (Index) => {
  const result = (await contract.getInstancePrice(Index)).toNumber()
    return result ;  
};

export const getPropAddress= async (Index) => {
  const result = await contract.getInstanceAddress(Index)
    return result ;  
};

export const getPropZIP = async (Index) => {
  const result = await contract.getInstanceZIP(Index)
    return result ;  
};
 
export const getPropCity= async (Index) => {
  const result = (await contract.getInstanceCity(Index)).toNumber()
    return result ;  
};

export const getLastOpsTime= async (Index) => {
  const result = await contract.getLastOpsTime(Index)
    return result ;  
};

const getPropAgentFee=async (Index) => {
  const result = (await contract.getInstanceAgentFee(Index)).toNumber()
    return result ;  
};

export const getInstanceProptype =async (Index) => {
  const result = (await contract.getInstanceProptype(Index)).toNumber()
    return result ;  
};

export const getInstanceBlockEntry=async (Index) => {
  const result = await contract.getInstanceBlockentry(Index)
    return result ;  
};

export const getPropSellerAddress =async(Index) => {
  const result = await contract.getInstanceSellerAddress(Index)
    return result ;  
};

const getPropBuyerAddress=async(Index) => {
  const result = await contract.getInstanceBuyerAddress(Index)
    return result ;  
};

export const getPropAgentAddress=async(Index) => {
  const result = await contract.getInstanceAgentAddress(Index)
    return result ;  
};

export const getPropFromState=async(state) => {
  const result = await contract.getPropFromState(state)
    return result ;  
};


export const getInstanceAcco=async(index) => {
  const result = (await contract.getInstanceAcco(index)).toNumber()
    return result ;  
};
export const getInstancePropArea=async(index) => {
  const result = (await contract.getInstancePropArea(index)).toNumber()
    return result ;  
};


export const getPropState=async(Index) => {
  const result = (await contract.getInstanceState(Index)).toNumber()
    return result ;  
};
export const ShowInterest=async(index) => {
   await contract.buyerShowsInterest(index);
  
};




