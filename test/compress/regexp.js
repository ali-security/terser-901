regexp_simple: {
    input: {
        /rx/ig
    }
    expect_exact: "/rx/gi;"
}

regexp_slashes: {
    input: {
        /\\\/rx\/\\/ig
    }
    expect_exact: "/\\\\\\/rx\\/\\\\/gi;"
}

regexp_1: {
    options = {
    }
    input: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(/([Sap]+)/ig)));
    }
    expect: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(/([Sap]+)/gi)));
    }
    expect_stdout: '["PASS","pass"]'
}

regexp_2: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(new RegExp("(pass)", "ig"))));
    }
    expect: {
        console.log(JSON.stringify("COMPASS? Overpass.".match(/(pass)/gi)));
    }
    expect_stdout: '["PASS","pass"]'
}

regexp_no_ddos: {
    options = {
        evaluate: true,
        unsafe: true,
    }
    input: {
        console.log(/(b+)b+/.test("bbb"))
        console.log(RegExp("(b+)b+").test("bbb"))
    }
    expect: {
        console.log(/(b+)b+/.test("bbb"))
        console.log(RegExp("(b+)b+").test("bbb"))
    }
    expect_stdout: ["true", "true"]
}
