import { Small } from "../../payloads/Small";
import { Medium } from "../../payloads/Medium";
import { Large } from "../../payloads/Large";
import { smallRules } from "./rules/smallRules";
import { mediumRules } from "./rules/mediumRules";

export class Valivar {
    small(data: Small) {
        return smallRules.validate(data);
    }

    medium(data: Medium) {
        return mediumRules.validate(data);
    }

    large(data: Large) {

    }
}