# installation

https://crunchify.com/how-to-install-ansible-on-macos/

use pip3

## Troubleshooting
for cryptography error; make sure pip3 version is latest

---

# notes

ansible-playbook playbooks/asd.yml --private-key=/key.cer  --become
 
```console
 ["E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)", "E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?"], "stdout": "", "stdout_lines": []}
```
 
--become --> resolves permission denied