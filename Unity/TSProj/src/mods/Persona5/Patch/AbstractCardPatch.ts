//@Patch

import {CardTags} from "../../ModTheSpire/Scripts/Cards/AbstractCard";

enum PatchCardTags{
    P5
}

export const P5CardTags = {
    ...CardTags,
    ...PatchCardTags,
}
type P5CardTags = CardTags | PatchCardTags;