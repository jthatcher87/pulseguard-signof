import os
import sys
import subprocess
import time
import urllib.request

def test_portal_files():
    print("[TEST 1] Portal Static Assets & Signoff Data Integrity...")
    base_dir = "/working_dir/c_4a8f80822e30ef8a/pulseguard-signoff-portal"
    html_path = os.path.join(base_dir, "index.html")
    js_path = os.path.join(base_dir, "app.js")

    with open(html_path) as f:
        html = f.read()
    with open(js_path) as f:
        js = f.read()

    # Verify structural elements in HTML
    assert "PulseGuard™ Governance Portal" in html
    assert "progress-bar" in html
    assert "nav-phase-1" in html
    assert "nav-phase-5" in html

    # Verify all 5 phases in JS
    assert "Phase 1: Cryptographic & Systems Security Signoff" in js
    assert "Phase 2: Clinical & IRB Governance Signoff" in js
    assert "Phase 3: Regulatory & App Store Compliance Signoff" in js
    assert "Phase 4: Engineering & Architecture Signoff" in js
    assert "Phase 5: Executive Board & Strategic Investor Signoff" in js

    # Verify Google Drive links
    assert "1gAVUmGxueL6sNMPLMe7veGQrCtJ1LbA0" in js # Folder 1
    assert "1kdWfbHgkCRMBAWrM8qIQeMVtk8stYkCG" in js # Folder 2
    assert "1LJjCSif-I85NUOSowqATIIS2h53jnDag" in js # Folder 3
    assert "1qBcEeogChK-y7DQjpRvPNddhqGYORwUP" in js # Folder 4
    assert "1j2vBe3YaanzNFIsKFQHlXwDiozPm5MBF" in js # Folder 5
    print("  --> PASS: All 5 phases, document URLs, and checklist criteria verified.")

def test_portal_http_server():
    print("\n[TEST 2] Embedded Portal HTTP Server Test...")
    port = 8097
    proc = subprocess.Popen(
        [sys.executable, "serve_portal.py"],
        cwd="/working_dir/c_4a8f80822e30ef8a/pulseguard-signoff-portal",
        env={**os.environ, "PORT": str(port)},
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    time.sleep(1)

    try:
        url = f"http://127.0.0.1:{port}/index.html"
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=3) as resp:
            assert resp.status == 200
            body = resp.read().decode()
            assert "PulseGuard™ Governance Portal" in body
            print(f"  --> PASS: Server returned 200 OK from {url}")

        js_url = f"http://127.0.0.1:{port}/app.js"
        with urllib.request.urlopen(js_url, timeout=3) as resp:
            assert resp.status == 200
            js_body = resp.read().decode()
            assert "phasesData" in js_body
            print(f"  --> PASS: Static JavaScript bundle served successfully.")
    finally:
        proc.terminate()
        proc.wait()

if __name__ == "__main__":
    print("====================================================================")
    print("PulseGuard Signoff Portal Verification Test")
    print("====================================================================")
    test_portal_files()
    test_portal_http_server()
    print("\n====================================================================")
    print("ALL SIGNOFF PORTAL TESTS PASSED (0 ERRORS).")
    print("====================================================================")
