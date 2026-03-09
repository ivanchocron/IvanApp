-- ============================================================
-- Core Tables for Community Intranet Platform
-- Sections: Residents, Staff, Associates, Devices
-- ============================================================

-- ============================================================
-- RESIDENTS
-- ============================================================
CREATE TABLE IF NOT EXISTS residents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  room_number TEXT,
  date_of_birth DATE,
  admission_date DATE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'archived')),
  notes TEXT,
  photo_url TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE residents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read residents"
  ON residents FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert residents"
  ON residents FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update residents"
  ON residents FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- ROOMS
-- ============================================================
CREATE TABLE IF NOT EXISTS rooms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  room_number TEXT NOT NULL UNIQUE,
  capacity INTEGER NOT NULL DEFAULT 1,
  floor TEXT,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'occupied', 'maintenance')),
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read rooms"
  ON rooms FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert rooms"
  ON rooms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update rooms"
  ON rooms FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- RESIDENT REQUESTS
-- ============================================================
CREATE TABLE IF NOT EXISTS resident_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  resident_id UUID REFERENCES residents(id) ON DELETE SET NULL,
  request_type TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'resolved', 'cancelled')),
  priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  resolved_at TIMESTAMPTZ,
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE resident_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read resident_requests"
  ON resident_requests FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert resident_requests"
  ON resident_requests FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update resident_requests"
  ON resident_requests FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- STAFF
-- ============================================================
CREATE TABLE IF NOT EXISTS staff (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  role TEXT NOT NULL DEFAULT 'staff',
  department TEXT,
  hire_date DATE,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'on_leave')),
  photo_url TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE staff ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read staff"
  ON staff FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert staff"
  ON staff FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update staff"
  ON staff FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- STAFF SCHEDULES
-- ============================================================
CREATE TABLE IF NOT EXISTS staff_schedules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  staff_id UUID REFERENCES staff(id) ON DELETE CASCADE,
  shift_date DATE NOT NULL,
  shift_start TIME NOT NULL,
  shift_end TIME NOT NULL,
  shift_type TEXT NOT NULL DEFAULT 'regular' CHECK (shift_type IN ('regular', 'overtime', 'on_call')),
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE staff_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read staff_schedules"
  ON staff_schedules FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert staff_schedules"
  ON staff_schedules FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update staff_schedules"
  ON staff_schedules FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- ASSOCIATES (External organizations/partners)
-- ============================================================
CREATE TABLE IF NOT EXISTS associates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  organization_id UUID,  -- FK added below
  role TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  photo_url TEXT,
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE associates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read associates"
  ON associates FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert associates"
  ON associates FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update associates"
  ON associates FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- ORGANIZATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  email TEXT,
  phone TEXT,
  address TEXT,
  website TEXT,
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read organizations"
  ON organizations FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert organizations"
  ON organizations FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update organizations"
  ON organizations FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- Add FK after both tables exist
ALTER TABLE associates
  ADD CONSTRAINT associates_organization_id_fkey
  FOREIGN KEY (organization_id) REFERENCES organizations(id) ON DELETE SET NULL;

-- ============================================================
-- DONATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  associate_id UUID REFERENCES associates(id) ON DELETE SET NULL,
  organization_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
  amount NUMERIC(12, 2),
  donation_type TEXT NOT NULL DEFAULT 'monetary' CHECK (donation_type IN ('monetary', 'in_kind', 'volunteer')),
  description TEXT,
  donated_at DATE NOT NULL DEFAULT CURRENT_DATE,
  receipt_url TEXT,
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read donations"
  ON donations FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert donations"
  ON donations FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update donations"
  ON donations FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- DEVICES
-- ============================================================
CREATE TABLE IF NOT EXISTS devices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  device_type TEXT NOT NULL,
  serial_number TEXT,
  model TEXT,
  manufacturer TEXT,
  purchase_date DATE,
  purchase_price NUMERIC(10, 2),
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'assigned', 'maintenance', 'retired')),
  location TEXT,
  notes TEXT,
  photo_url TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE devices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read devices"
  ON devices FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert devices"
  ON devices FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update devices"
  ON devices FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- DEVICE ASSIGNMENTS
-- ============================================================
CREATE TABLE IF NOT EXISTS device_assignments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id UUID REFERENCES devices(id) ON DELETE CASCADE,
  assigned_to_type TEXT NOT NULL CHECK (assigned_to_type IN ('resident', 'staff')),
  assigned_to_id UUID NOT NULL,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  returned_at TIMESTAMPTZ,
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE device_assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read device_assignments"
  ON device_assignments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert device_assignments"
  ON device_assignments FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update device_assignments"
  ON device_assignments FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- DEVICE MAINTENANCE
-- ============================================================
CREATE TABLE IF NOT EXISTS device_maintenance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id UUID REFERENCES devices(id) ON DELETE CASCADE,
  maintenance_type TEXT NOT NULL CHECK (maintenance_type IN ('repair', 'upgrade', 'inspection', 'cleaning')),
  description TEXT NOT NULL,
  performed_by TEXT,
  cost NUMERIC(10, 2),
  performed_at DATE NOT NULL DEFAULT CURRENT_DATE,
  next_maintenance_at DATE,
  notes TEXT,
  is_archived BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE device_maintenance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read device_maintenance"
  ON device_maintenance FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated users can insert device_maintenance"
  ON device_maintenance FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update device_maintenance"
  ON device_maintenance FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- SHARED: auto-update updated_at trigger function
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables
DO $$
DECLARE
  t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'residents', 'rooms', 'resident_requests',
    'staff', 'staff_schedules',
    'associates', 'organizations', 'donations',
    'devices', 'device_assignments', 'device_maintenance'
  ]
  LOOP
    EXECUTE format('
      CREATE TRIGGER update_%I_updated_at
        BEFORE UPDATE ON %I
        FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    ', t, t);
  END LOOP;
END;
$$;
