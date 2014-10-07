"strict mode";
var Formatter = {
    parse: function(str){
    	try {
	        return JSON.parse(str);
    	} catch (e) {
    		eval("var a = " + str);
    		return a;
    	}
    	return Error("Invalid data");
    },
    stringify: function(value, options) {
        // console.log("stringify", value, JSON.stringify(options));
        if (!options)
            options = {};
        if (!options.spacesPerTab) {
            options.spacesPerTab = 4;
        }
        if (options.quote === undefined) {
            options.quote = '"';
        }
        if (!options.tabCount) {
            options.tabCount = 1;
        }
        if (options.quoteAroundKeys === undefined) {
            options.quoteAroundKeys = true;
        }
        // options.spacesPerTab
        // options.quote = none, single, double
        if (typeof value === "number") {
            return value;
        }
        else if (typeof value === "string") {
            return options.quote + value + options.quote;
        }
        else if (Array.isArray(value)) {
            return "[" + value.join(", ") + "]";
        }
        else {
            // object
            var object = value,
                props = [],
                sortedProps,
                prevIndent,
                indent;
            for (p in value) {
                props.push(p);
            }
            sortedProps = props.sort();

            options.tabCount--;
            prevIndent = formatTab(options);
            options.tabCount++;
            indent = formatTab(options);
            options.tabCount++;
            var r = "{\n" +
                sortedProps.map(function(key) {
                    var v = object[key];
                    return indent + formatKey(key, options) + ": " + Formatter.stringify(v, options);
                }).join(",\n") +
                "\n" + prevIndent + "}";
            options.tabCount--;
            return r;
        }
        // return JSON.stringify(obj);
    }
};

function formatTab(options) {
    var spaces = [];
    for (var i = 0; i < options.tabCount; i++) {
        for (var j = 0; j < options.spacesPerTab; j++) {
            spaces.push(" ");
        }
    }
    return spaces.join("");
}

function formatKey(key, options) {
    if (!options.quoteAroundKeys)
        return key;
    return options.quote + key + options.quote;
}

module.exports = Formatter;
