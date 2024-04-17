export class Style {
    constructor(patterns) {
        this.patterns = Object();
        for(const pattern in patterns) {
            this.patterns[pattern] = patterns[pattern];
        }
    }

    setPatterns(patterns) {
        for(const pattern in patterns) {
            this.patterns[pattern] = patterns[pattern];
        }
    }

    renderString() {
        let string = "";
        for(const pattern in this.patterns) {
            string += pattern + ": " + this.patterns[pattern] + ";";
        }

        return string;
    }
}