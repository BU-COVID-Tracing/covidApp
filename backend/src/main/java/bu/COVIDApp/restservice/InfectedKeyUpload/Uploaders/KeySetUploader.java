package bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders;

import bu.COVIDApp.Database.KeySetData;
import bu.COVIDApp.Database.KeySetRegistry;
import bu.COVIDApp.restservice.InfectedKeyUpload.InfectedKeys;

import java.util.List;

public class KeySetUploader extends InfectedKeyUploader {

    KeySetRegistry keyReg;


    /**
     * @param myKeys an InfectedKeys object that contains the keys and authorization info for the key upload
     */
    public KeySetUploader(List<InfectedKeys> myKeys, KeySetRegistry keyReg) {
        super(myKeys);
        this.keyReg = keyReg;
    }

    /**
     * Upload the keys in myKeys to the registry.
     */
    @Override
    public boolean uploadKeys() {
        for(InfectedKeys key:this.myKeys){
            KeySetData myData = new KeySetData(key.getChirp(),key.getTime());
            keyReg.save(myData);
        }
        return true;
    }
}
