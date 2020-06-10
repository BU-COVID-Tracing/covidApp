package bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders;

import bu.COVIDApp.restservice.InfectedKeyUpload.InfectedKeys;
import bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders.InfectedKeyUploader;

import java.util.List;

public class KeyValBloomFilterUploader extends InfectedKeyUploader {
    public KeyValBloomFilterUploader(List<InfectedKeys> myKeys){
        super(myKeys);
    }

    /**
     * Try to authorize the user. If authorization is successful, calculate hashes of the keys that have been uploaded
     * and make the necessary updates to the bloom filter stored in the database
     */
    @Override
    public boolean uploadKeys() {
//        if(authorize()){
//            //Do key upload
//        }else{
//            //Return something to the user to let them know that the authorization failed
//        }
        return true;
    }
}
