TODO:
    updateHistory gives wrong owners back
    code cleanup for client and api
    refactor ? repo name, family name, (dont forget to rename sawtooth-reason-supply family name in source code)
    readme update
    also homepage text update
    docker container -> dont forget to change localhost ip to docker ips (search for localhost)
    tests
    check package.json for naming and scripts

I implemented user auth structure like this:
on createUSer salt gets generated, password gets hashed through salt
privatekey gets encrypted with hashed pw. 
in auth will be then iv, encryptedpw and salt saved and in token we save the hash

for login we hash pw with salt and verifykeys

for auth we can get the hash through token and check whatever

how does login work: user types username and pw
i look for username in user, get the public key in the same table
now i check in auth, where for every created user there is a entry made with public key and private key encrypted with the hashed pw,
if i can decrypt the encrypted private key with the hashed pw and check if public and private key match

The start_block_num and end_block_num columns specify the range in which that state value is set or exists.
Values that are valid as of the current block have end_block_num set to NULL.


info: 
Event with eventtype sawtooth/block-commit has attributes:
block_id, block_num, state_root_hash, previous_block_id,
------



docker postgres commands: 

docker run --name supply-postgres -p 5432:5432 -e POSTGRES_PASSWORD=supply -d mdillon/postgis

docker exec -u postgres supply-postgres createdb supplyDB
docker exec -u postgres supply-postgres dropdb supplyDB


// username == postgres, userpw = supply
// idk if needed
docker exec supply-postgres bash -c "PGPASSWORD=supply createdb -U postgres supplyDB"