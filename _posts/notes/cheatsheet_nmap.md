---
title: 'CheatSheet: nmap'
description: 'List scanned hosts and enumerate identified services.'
---
- ## CheatSheet: nmap
	---
    Network Mapper is an open source tool used to scan computer networks and services running on hosts. This program can be used by Systems Administrators, Network Defenders, or other authorized individuals to audit or scan a network. This can also be used by threat actors to map a network and identify vulnerable servers.

    Unauthorized nmap activity may indicate a threat actor attempting to gather intelligence before pivoting within a network or deploying initial exploits.

- ## Basic Usage
	---
	```
    // Scan IP for OS, Version, and Traceroute.
    nmap -A 10.10.10.10 -T4
    
    // Scan IP range for common services.
    nmap -F -sV 10.10.0.0-10.10.255.255
    
    // Scan IP Subnet for common ports.
    nmap -F 192.168.1.0/24

    // Scan known host that has Ping disabled.
    nmap -Pn -F -sV 10.2.0.200

    // Scan a subnet for Well-Known and Registered Ports
    nmap -p-49151 10.0.42.0/24
	```

- ## Common Flags
	---
    ### General

    [-A] Enable OS detection, version detection, script scanning, and traceroute

    [-T<0-5>] Set timing template (higher is faster).
    
    [-6] Enable IPv6 scanning.
    
    [-iL] Input from list file.
        
    ### Port Specification

    [-p] Only scan specified ports
    
    [-F] Fast mode - Scan fewer ports than default scan.

    [--top-ports <number>] Scan <number> most common ports.

    ### Host Enumeration
    
    [-sn] Ping Scan, disables port scan.
    
    [-sV] Probe open ports to determine service/version info.
    
    [-Pn] Treat all hosts as online.
    
    [--traceroute] Trace hop path to each host.
    
    [-O] Enable OS detection.

    ### Detection Evasion
    
    [-S] Spoof source address.
    
    [-g] Use given source port.

    [--spoof-mac] Spoof your MAC address.

- ## Common Ports & Services
    ---
    7 - Ping/Echo Protocol
    
    20 - FTP Protocol - Port for transferring FTP data
    
    21 - FTP Protocol - Port for FTP Control/Commands
    
    22 - SSH Protocol
    
    23 - Telnet Protocol
    
    25 - Simple Mail Transport Protocol (SMTP)
    
    53 - Domain Name System (DNS)
    
    67 - BootStrap Protocol (BOOTP) or DHCP
    
    68 - BootStrap Protocol (BOOTP) or DHCP
    
    80 - HTTP - Basic Web
    
    81 - Torpark - Onion routing port
    
    82 - Torpark Control Port
    
    88 - Kerberos authenticating agent
    
    156 - SQL Service
    
    161 - Simple Network Management Protocol (SNMP)
    
    179 - Border Gateway Protocol (BGP)
    
    264 - Border Gateway Multicast Protocol (BGMP)
    
    389 - Lightweight Directory Access Protocol (LDAP)
    
    443 - HTTPS - Web over TLS/SSL
    
    445/TCP - Microsoft-DS (Active Directory, Windows Shares)
    
    445/UDP - Microsoft-DS SMB File Sharing
    
    514/UDP - Syslog Protocol
    
    989 - FTP Protocol (data) over TLS/SSL
    
    990 - FTP Protocol (control) over TLS/SSL

- ## Private IP Classes
	---
    
    Class A: 10.0.0.0 - 10.255.255.255
    
    Class B: 172.16.0.0 - 172.31.255.255
    
    Class C: 192.168.0.0 - 192.168.255.255
    
- ## Port Ranges
	---
    
    Well-Known [0,1023]

    Registered [1024,49151]

    Dynamic/Private [49152, 65535]
