/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let filteredEmails = new Set();

    emails.forEach(email => {
        let split = email.split('@');
        let localName = split[0].replaceAll('.','');
        let domainNAme = split[1];
        let plusIndex = localName.indexOf("+");
        if (plusIndex !== -1) {
            localName = localName.substring(0, plusIndex);
        }
        filteredEmails.add(`${localName}@${domainNAme}`);
    })

    return [...filteredEmails].length;
};



console.log(JSON.stringify(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])));
