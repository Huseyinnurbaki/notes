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

---

# remote_src: true

remote_src: true uses remote directory.
```
---
- name: docker compose playbook
  hosts: all
  tasks:
  - name: copy Docker Compose files
    copy:
      src: "deployments/"
      dest: tmp/
      remote_src: true
    become: true
  - name: deploy Docker Compose stack
    docker_compose:
      project_src: tmp/
      state: present
    register: __docker_compose

  - name: debug
    debug:
      var: __docker_compose

```
