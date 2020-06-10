package bu.COVIDApp.restservice.ContactCheck;

import bu.COVIDApp.Database.KeySetData;
import bu.COVIDApp.Database.KeySetRegistry;
import bu.COVIDApp.restservice.ContactCheck.Accessors.KeySetAccessor;
import bu.COVIDApp.restservice.ContactCheck.Accessors.KeyValBloomFilterAccessor;
import bu.COVIDApp.restservice.ContactCheck.Accessors.RegistryAccessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Controller
public class RegistryAccessController {
    @Autowired
    private KeySetRegistry keyReg;

    /**
     * Do some type of access that gets the user information that allows them to check if they have keys that have been marked
     * as infected
     * @param authentication a user id to prevent/punish repeated queries
     * @return The object that will be sent to the user and will allow them to determine if they have made contact with an infected user
     */
    @GetMapping("/contactCheck")
    public @ResponseBody
    ArrayList<KeySetData> getContactCheck (@RequestParam(value = "authentication", defaultValue = "") String authentication){
        RegistryAccessor myAccessor = new KeySetAccessor(keyReg);
        return myAccessor.getKeys().getMyDataContainer();
    }

    /**
     * Allows a user to upload keys to the registry and a check is done on the backend to see if a match is found
     * @param UserInput an object containing the keys that the user would like to check
     * @return true or false depending on if contact was detected or not
     */
    @PostMapping("/contactCheck")
    public boolean postContactCheck(@RequestBody RegistryPostInput UserInput){
        RegistryAccessor myAccessor = new KeyValBloomFilterAccessor("endpoint");
        return myAccessor.checkKeys(UserInput.getKeys());
    }

    /**
     * Verifies a users authentication parameters
     * @param authentication the authentication parameters provided by the user
     * @return true if the user authenticated successfully, false otherwise
     */
    private boolean authenticateUser(String authentication){
        return true;
    }
}
