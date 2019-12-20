const petName = process.argv[2]
const vaillainName = process.argv[3]
const adjective = process.argv[4]

function petDefense(petName, vaillainName, adjective){

    return console.log(`The  ${adjective} ${petName} saved us from ${vaillainName}`)
        
}
//petDefense(petName, vaillainName, adjective );

module.exports = { petName,
                   vaillainName,
                   adjective,
                   petDefense}