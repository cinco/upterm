import {PluginManager} from "../../PluginManager";
import {combine, anyFilesSuggestionsProvider} from "./Common";
import {manPageOptions} from "../../utils/ManPages";

PluginManager.registerAutocompletionProvider("cat", combine([anyFilesSuggestionsProvider, manPageOptions("cat")]));
