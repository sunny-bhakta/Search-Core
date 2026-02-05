const findings = ['CVE-123', 'OK'];

function scanStatus(results) {
  return results.some((item) => item.startsWith('CVE')) ? 'fail' : 'pass';
}

console.log(scanStatus(findings));
// Output:
// fail
