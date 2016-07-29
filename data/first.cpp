#include <iostream>
#include <fstream>
#include <string>
#include <sstream>
#include <iomanip>
#include <map>

using namespace std;

map<string,pair<double,double> > coord;

int main()
{
  ifstream in_file;
  ofstream out_file;
  in_file.open("parcel_a.csv");

  string s = "";
  string address = "";
  while (getline(in_file,s)){
    int first_comma = s.find_first_of(",");
    int second_comma = s.find_first_of(",",first_comma+1);
    s[second_comma] = ' ';
    int third_comma = s.find_first_of(",",second_comma+1);
    s[third_comma] = ' ';
    address = s.substr(first_comma+1,s.find_first_of(",",third_comma+1)-first_comma-1);

    int lat_index = 0;
    lat_index = s.find_first_of(",",third_comma+1);
    for (int i = 0; i < 2; ++i){
      lat_index = s.find_first_of(",",lat_index+1);
    }
    int long_index = s.find_first_of(",",lat_index+1);
    int final_comma = s.find_first_of(",",long_index+1);

    stringstream ss;
    double x;
    double y;
    ss << s.substr(lat_index+1,long_index+1-lat_index-2);
    ss >> x;
    ss.clear();
    ss << s.substr(long_index+1,final_comma+1-long_index-2);
    ss >> y;

    pair<double,double> c (x,y);
    pair<string,pair<double,double> > tmp(address,c);
    coord.insert(tmp);
  }
  if (in_file.bad())
    cerr << "error reading file" << endl;


    int total = 0;
    int not_found = 0;
  in_file.close();
  in_file.open("service_a.csv");
  out_file.open("fixed.csv");
  getline(in_file,s);
  s = s.substr(0,s.size()-1);
  out_file << s << "," << "latitude,longitude" << endl;
  while(getline(in_file,s)){
    total++;
    s = s.substr(0,s.size()-1);
    int start = s.find_last_of("\"");
    start = s.find_first_of(",",start+2);

    // these are the 'normal' ones, 19,598 out of 24,691 (5093 messed up)
    address = s.substr(start+1,s.find_first_of(",",start+1)-start-1);

    // these are the ones with apartment/unit/townhouse number, e.g. 1/535 Wentworth Avenue
    // will become 535 Wenworth Avenue, fixed about 1,
    // fixed another 1,273 (3820 still messed up)
    if (address.find_first_of("/") != -1){
      start = address.find_first_of("/")+1;
      address = address.substr(start,address.size());
    }
    // these has names, e.g. Upjohn Park (Pk 50), will remove up until that last bracket
    // fixed another 2419, (1401 still messed up)
    if (address.find_first_of(")") != -1){
      start = address.find_first_of(")")+2;
      address = address.substr(start,address.size());
    }

    // ok, it passes those two, so now we got stuffs with names, like Elizabeth Farm 70 Alice St,
    // so delete everything until you hit an integer
    // 566 left, but will destroy addresses without any number at all!
    int address_start = 0;
    while (address.at(address_start) > 57 || address.at(address_start) < 48){
      address_start++;
    }
    address = address.substr(address_start,address.size());

    //address = address.substr(address_start,address.size()-address_start);
    if (coord.find(address) != coord.end()){
      pair<double,double> xy = coord[address];

      out_file << s << "," << setprecision(13) << xy.first << "," << xy.second << endl;
    }
    else
    {
      // fixes another 20, the ones with 18-20 etc
      if (address.find_first_of("-") != -1){
        start = address.find_first_of("-")+1;
        address = address.substr(start,address.size());
      }
      if (coord.find(address) == coord.end()){
        not_found++;
        //cout << address << " not found!" << endl;
      }
    }
  }
  cout << "Not found: " << not_found << endl;
  cout << "Total    : " << total << endl;

}
